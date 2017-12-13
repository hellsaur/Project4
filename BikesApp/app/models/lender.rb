class Lender < ApplicationRecord
    has_many :bikes
    has_many :renters
    

    validates_uniqueness_of :username
    has_secure_password
    has_secure_token :auth_token

    def invalidate_token
        self.update_columns(auth_token: nil)
      end
    
      def self.validate_login(username, password)
        lender = find_by(username: username)
        if lender && lender.authenticate(password)
          lender
        end
    end
end
