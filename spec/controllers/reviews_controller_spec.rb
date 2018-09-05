require 'rspec'
require 'rails_helper'

RSpec.describe ReviewsController do
  describe "GET index" do
    before(:all) do
      @review = FactoryBot.create(:review)
    end

    it "assigns @reviews" do
      get :index
      expect(assigns(@reviews)["reviews"]).to eq([@review])
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end
  describe "GET #show" do
    before(:all) do
      @review = FactoryBot.create(:review)
    end

    it "assigns the requested review to @review" do
      get :show, params: { id: @review.id }
      assigns(:review).should eq(@review)
    end

    it "renders the #show view" do
      get :show,  params: { id: @review.id }
      expect(response).to render_template("show")
    end
  end

  describe "POST create" do
    before(:all) do
      @review_attr = FactoryBot.build(:review).attributes
      @invalid_review_attr = @review_attr.clone
      @invalid_review_attr.delete("name")
    end

    it "with valid attributes it creates a new review" do
      expect{
        post :create, params: {review: @review_attr}
      }.to change(Review, :count).by(1)

    end

    it "with valid attributes redirects to the new review" do
      post :create, params: {review: @review_attr}
      expect(response).to redirect_to Review.last
    end

    it "with invalid attributes does not save the new review" do
      expect{
        post :create, params: {review: @invalid_review_attr}
      }.to_not change(Restaurant,:count)
    end

  end
end