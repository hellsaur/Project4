class CreateRentalInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :rental_infos do |t|
      t.string :f_name
      t.string :l_name
      t.string :email
      t.string :phone
      t.string :time
      t.string :date
      t.string :duration
      t.string :address
      t.belongs_to :bikes

      t.timestamps
    end
  end
end
