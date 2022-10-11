class DiarySerializer < ActiveModel::Serializer
  attributes :id, :entry, :comment
  has_one :journey
end
