

class Restaurant < ApplicationRecord
  has_many :reviews
  belongs_to :cuisine

  geocoded_by :address
  after_validation :geocode

  validates :cuisine_id,:name, :address, presence: true
  validates :max_delivery_time, presence: true
  validates :max_delivery_time, numericality: { only_integer: true, greater_than_or_equal_to: 30, less_than_or_equal_to: 120}

  def cuisine_name
    self.cuisine.name
  end

  def cuisine_code
    self.cuisine.code
  end

  def avg_rating
    self.reviews.average(:rating)
  end

end
