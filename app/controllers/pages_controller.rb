class PagesController < ApplicationController
  def home
    if (params[:phone_number] || params[:custom_number]).present?
      UserMailer.notify_admin(params).deliver_now
    end
  end
end
