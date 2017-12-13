class CreateRenters < ActiveRecord::Migration[5.1]
  def change
    create_table :renters do |t|
      t.string :name
      t.string :last_name
      t.string :phone_number
      t.text :email
      t.string :username, index: true
      t.string :password_digest
      t.string :auth_token
      t.timestamps
    end
  end
end
