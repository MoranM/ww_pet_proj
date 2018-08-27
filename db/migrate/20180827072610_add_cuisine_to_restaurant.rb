class AddCuisineToRestaurant < ActiveRecord::Migration[5.2]
  def change
    add_reference :restaurants, :cuisine, foreign_key: true, index: true
  end
end
