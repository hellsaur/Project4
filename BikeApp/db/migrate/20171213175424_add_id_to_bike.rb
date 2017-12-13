class AddIdToBike < ActiveRecord::Migration[5.1]
  def change
    add_belongs_to :bikes, :lender
  end
end
