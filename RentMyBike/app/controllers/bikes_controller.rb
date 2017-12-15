class BikesController < ApiController
    before_action :require_login, except: [:index, :show]
    
      def index
        bikes = Bike.all
        render json: { bikes: bikes }
      end
    
      def show
        bike = Bike.find(params[:id])
        bike_user = bike.user
        render json: { bike: bike, username: bike_user.username }
      end
    
      def create
        bike = Bike.new(bike_params)
        bike.user = current_user
    
        if bike.save
          render json: {
            message: 'ok',
            bike: bike,
          }
        else
          render json: {message: 'Could not create bike'}
        end
      end
    
      private
      def bike_params
        params.require(:bike).permit(:image, :model, :color, :condition)
      end
end
