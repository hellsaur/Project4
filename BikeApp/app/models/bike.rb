class Bike < ApplicationRecord
    has_one :renter
    belongs_to :lender
end
