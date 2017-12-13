class Lender < ApplicationRecord
    has_many :bikes
    has_many :renters
end
