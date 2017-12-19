class RentalInfoController < ApiController
    before_action :require_login, except: [:index, :show]
    def index
        rentalsInfo = RentalInfo.all
        render json: {rentalsInfo: rentalsInfo}
    end

    def show
        rentalInfo = RentalInfo.find(params[:id])
        rentalInfo_bike = rentalInfo.bike
        render json: { rentalInfo: rentalInfo, username: rentalInfo_bike.username }
      end

    
      def create
        rentalInfo = RentalInfo.new(rentalInfo_params)
        
    
        if rentalInfo.save
          render json: {
            message: 'ok',
            rentalInfo: rentalInfo,
          }
        else
          render json: {message: 'Could not create rentalInfo'}
        end
      end

      def update
       rentalInfo = RentalInfo.find(params[:id]) 
       if rentalInfo.update(update_params)
       end
      end

      def destroy
        rentalInfo = RentalInfo.find(params[:id])
          rentalInfo.delete
          render json: {message: 'rentalInfo deleted'}
         
    end
    
      private
      def rentalInfo_params
        params.require(:rentalInfo).permit(:f_name, :l_name, :email, :phone, :time, :date, :duration,:address)
      end
      def update_params
        params.require(:rentalInfo).permit(:f_name, :l_name, :email, :phone, :time, :date, :duration,:address)
      end
    
end
