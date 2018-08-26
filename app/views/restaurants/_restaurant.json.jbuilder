json.extract! restaurant, :id, :name, :cuisine, :accept_10bis, :max_delivery_time, :created_at, :updated_at, :avg_rating
json.url restaurant_url(restaurant, format: :json)
