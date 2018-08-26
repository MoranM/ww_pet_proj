class Restaurant < ApplicationRecord
  has_many :reviews

  def avg_rating
    self.reviews.average(:rating)
  end

end
