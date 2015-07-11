class PagesController < ApplicationController
  def home
    unless params.values_at(:phone_number || :custom_number).empty?
      UserMailer.notify_admin(params).deliver_now
    end
  end
end
