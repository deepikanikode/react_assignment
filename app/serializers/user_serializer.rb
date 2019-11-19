class UserSerializer < ActiveModel::Serializer
  attributes :name, :address, :city, :region, :country, :birthday

  # This method is used to format the birthday in yyyy-mm-dd format.

  def birthday
    object.birthday.strftime('%Y-%m-%d')
  end
end
