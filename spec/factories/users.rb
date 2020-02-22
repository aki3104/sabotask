FactoryBot.define do
  factory :user do
    password = Faker::Internet.password(min_length: 8, max_length: 16)

    name                  { Faker::Name.name }
    email                 { Faker::Internet.free.email }
    password              { password }
    password_confirmation { password }
  end
end
