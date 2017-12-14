class LendersController < ApiController
    before_action :require_login, except: [:create]

    def index
        lenders = Lender.all
        render json: { lenders: lenders}
      end
    
      def create
        lender = Lender.create!(lender_params)
        render json: { token: lender.auth_token }
      end
    
      def profile
        lender = Lender.find_by_auth_token!(request.headers[:token])
        lender_bikes = Bike.where(lender_id: lender.id)
        render json: { 
          lender: { username: lender.username, email: lender.email, name: lender.name },
          lenders: lender_bikes,  
        }
      end
    
      private
      def lender_params
        params.require(:lender).permit(:username, :email, :password, :name)
      end
end
