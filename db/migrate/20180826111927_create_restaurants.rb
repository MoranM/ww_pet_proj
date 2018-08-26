class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.boolean :accept_10bis
      t.integer :max_delivery_time
      t.string  :address

      t.timestamps
    end
  end
end
