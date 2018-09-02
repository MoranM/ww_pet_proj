json.extract! restaurant, :id, :name, :accept_10bis, :max_delivery_time, :created_at, :updated_at, :avg_rating, :cuisine_name, :cuisine_code, :latitude, :longitude
json.url restaurant_url(restaurant, format: :json)
