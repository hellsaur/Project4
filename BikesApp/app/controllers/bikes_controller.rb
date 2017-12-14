class BikesController < ApiController
    def index
        bikes = Bike.all
        render json: { bikes: bikes }
      end
    
      def show
        bike = Bike.find(params[:id])
        render json: { bike: bike}
      end
    
      def create
        bike = Bike.new(bike_params)

    
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
