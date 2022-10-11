class JourneySerializer < ActiveModel::Serializer
  attributes :id, :date, :milestone, :medication, :test_result
  has_one :ip
  has_one :gc
end
