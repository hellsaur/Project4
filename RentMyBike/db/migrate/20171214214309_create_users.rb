class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :last_name
      t.string :phone_number
      t.text :email
      t.string :username, index: true
      t.string :password_digest
      t.string :auth_token
      t.string :user_type

      t.timestamps
    end
  end
end
