class Renter < ApplicationRecord
    has_one :bike

    validates_uniqueness_of :username
    has_secure_password
    has_secure_token :auth_token

    def invalidate_token
        self.update_columns(auth_token: nil)
      end
    
      def self.validate_login(username, password)
        renter = find_by(username: username)
        if renter && renter.authenticate(password)
          renter
        end
    end
end
