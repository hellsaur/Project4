class RentersController < ApiController
    before_action :require_login, except: [:create]
    
      def create
        renter = Renter.create!(renter_params)
        render json: { token: renter.auth_token }
      end
    
      def profile
        renter = Renter.find_by_auth_token!(request.headers[:token])
        renter_bikes = Bike.where(renter_id: renter.id)
        render json: { 
          renter: { username: renter.username, email: renter.email, name: renter.name },
          renters: renter_bikes,
            
        }
      end
    
      private
      def renter_params
        params.require(:renter).permit(:username, :email, :password, :name)
      end
end
