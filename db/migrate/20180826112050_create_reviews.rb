class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :reviewer_name
      t.integer :rating
      t.text :comment
      t.belongs_to :restaurant, index: true
      t.timestamps
    end
  end
end
