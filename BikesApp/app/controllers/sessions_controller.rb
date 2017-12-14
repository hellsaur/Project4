class SessionsController < ApiController
    skip_before_action :require_login, only: [:create], raise: false
    
      def create
        if 
            lender = Lender.validate_login(params[:username], params[:password])
          allow_token_to_be_used_only_once_for(lender)
          send_token_for_valid_login_of(lender)

        elsif
            renter = Renter.validate_login(params[:username], params[:password])
            allow_token_to_be_used_only_once_for(renter)
            send_token_for_valid_login_of(renter)
        
        else
          render_unauthorized("Error with your login or password")
        end
      end
    
      def destroy
        logout
        head :ok
      end
    
      private
    
      def send_token_for_valid_login_of(lender)
        render json: { token: lender.auth_token }
      end

      def send_token_for_valid_login_of(renter)
        render json: { token: renter.auth_token }
      end
    
      def allow_token_to_be_used_only_once_for(lender)
        lender.regenerate_auth_token
      end

      def allow_token_to_be_used_only_once_for(renter)
        renter.regenerate_auth_token
      end
    
      def logout
        current_user.invalidate_token
      end
end
