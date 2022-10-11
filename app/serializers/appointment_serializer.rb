class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :summary, :questions, :date
  has_one :journey
end
