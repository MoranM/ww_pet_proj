require 'rspec'
require 'rails_helper'

RSpec.describe RestaurantsController do
  describe "GET index" do
    before(:all) do
      @rest = FactoryBot.create(:restaurant)
    end

    it "assigns @restaurants" do
      get :index
      expect(assigns(@restaurants)["restaurants"]).to eq([@rest])
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end

  describe "GET #show" do
    before(:all) do
      @rest = FactoryBot.create(:restaurant)
    end

    it "assigns the requested restaurant to @restaurant" do
      get :show, params: { id: @rest.id }
      assigns(:restaurant).should eq(@rest)
    end

    it "renders the #show view" do
      get :show,  params: { id: @rest.id }
      expect(response).to render_template("show")
    end
  end

  describe "POST create" do
    before(:all) do
      @cuisine = FactoryBot.create(:restaurant)
      @rest_attr = FactoryBot.build(:restaurant).attributes
      @invalid_rest_attr = @rest_attr.clone
      @invalid_rest_attr.delete("name")
    end

    it "with valid attributes it creates a new restaurant" do
      expect{
        post :create, params: {restaurant: @rest_attr}
      }.to change(Restaurant, :count).by(1)

    end

    it "with valid attributes redirects to the new restaurant" do
      post :create, params: {restaurant: @rest_attr}
      expect(response).to redirect_to Restaurant.last
    end

    it "with invalid attributes does not save the new contact" do
      expect{
        post :create, params: {restaurant: @invalid_rest_attr}
      }.to_not change(Restaurant,:count)
    end

    it "with invalid attributes re-renders the new method" do
      post :create, params: {restaurant: @invalid_rest_attr}
      expect(response).to render_template("new")
    end

  end

end
