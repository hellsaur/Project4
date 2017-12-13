class CreateLenders < ActiveRecord::Migration[5.1]
  def change
    create_table :lenders do |t|
        t.string :name
        t.string :last_name
        t.string :username
        t.string :phone_number
        t.text :email
      t.timestamps
    end
  end
end
