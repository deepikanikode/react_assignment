class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :region
      t.string :country
      t.date   :birthday
    end
  end
end
