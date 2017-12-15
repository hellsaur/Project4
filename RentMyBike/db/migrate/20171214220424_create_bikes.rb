class CreateBikes < ActiveRecord::Migration[5.1]
  def change
    create_table :bikes do |t|
      t.string :image
      t.string :model
      t.string :color
      t.string :condition
      t.belongs_to :user

      t.timestamps
    end
  end
end
