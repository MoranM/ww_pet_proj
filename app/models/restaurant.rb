

class Restaurant < ApplicationRecord
  has_many :reviews
  belongs_to :cuisine

  geocoded_by :address
  after_validation :geocode

  validates :cuisine_id, presence: true

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
