class ApiController < ApplicationController
    def require_login
        authenticate_token || render_unauthorized("Access denied")
      end
    
      def current_lender
        @current_lender ||= authenticate_token_lender
      end
    
      def current_renter
        @current_renter ||= authenticate_token_renter
      end

      protected
    
      def render_unauthorized(message)
        errors = { errors: [ detail: message ] }
        render json: errors, status: :unauthorized
      end
    
      private
    
      def authenticate_token_lender
        authenticate_with_http_token do | token, options |
          Lender.find_by(auth_token: token)
        end
    end
        def authenticate_token_renter
            authenticate_with_http_token do | token, options |
              Renter.find_by(auth_token: token)
            end
      end
end

