FactoryBot.define do
  factory :restaurant do
    name  "RestName"
    max_delivery_time  35
    address  "some address"
    association :cuisine
  end
end

FactoryBot.define do
  factory :cuisine do
    name "cuisine_name"
    code "N"
  end
end

FactoryBot.define do
  factory :review do
    reviewer_name "Moshe"
    rating rand(1..3)
    comment "very nice"
    association :restaurant
  end
end