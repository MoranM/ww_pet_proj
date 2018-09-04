require 'rspec'
require 'rails_helper'

RSpec.describe Restaurant, :type => :model do
  subject { described_class.new }

  it "is valid with valid attributes" do
    subject.id = 1
    subject.name = "RestName"
    subject.max_delivery_time = 30
    subject.cuisine = Cuisine.create;
    subject.address = "some address"

    expect(subject).to be_valid
  end

  it "is not valid without cuisine" do
    subject.id = 1
    subject.name = "RestName"
    subject.max_delivery_time = 30
    subject.address = "some address"

    expect(subject).to be_invalid
  end

  it "is not valid with delivery time under 30" do
    subject.id = 1
    subject.name = "RestName"
    subject.max_delivery_time = 29
    subject.address = "some address"

    expect(subject).to be_invalid
  end

  it "is not valid with delivery time above 120" do
    subject.id = 1
    subject.name = "RestName"
    subject.max_delivery_time = 129
    subject.address = "some address"

    expect(subject).to be_invalid
  end

  it "returns nil when no reviews" do
    subject.id = 1
    subject.name = "RestName"
    subject.max_delivery_time = 129
    subject.address = "some address"

    subject_avg_rating = subject.avg_rating()
    expect(subject_avg_rating).to be_nil
  end


  # it "returns the avg when reviews are present" do
  #   rest_id = 1
  #   subject.id = rest_id
  #   subject.name = "RestName"
  #   subject.max_delivery_time = 129
  #   subject.address = "some address"
  #   subject.reviews = generateReviews(3, rest_id)
  #
  #
  #   subject_avg_rating = subject.avg_rating()
  #   expect(subject_avg_rating).to eq 2
  # end


  it { should belong_to(:cuisine) }

  it { should have_many(:reviews) }


end


def generateReviews(howMany, rest_id)
  reviews_arr = [];

  begin
    review = Review.new
    review.restaurant_id = rest_id
    review.rating = howMany

    reviews_arr << review
    howMany-=1
  end until howMany == 0

  return reviews_arr;

end
