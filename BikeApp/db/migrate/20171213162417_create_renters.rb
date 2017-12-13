class CreateRenters < ActiveRecord::Migration[5.1]
  def change
    create_table :renters do |t|
      t.string :name
      t.string :last_name
      t.string :username
      t.integer :phone_number
      t.text :email
      t.timestamps
    end
  end
end
