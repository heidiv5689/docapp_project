class Api::AppointmentsController < ApplicationController
  before_action :set_doctor
  before_action :set_appointment, only: [:show, :update, :destroy]


  def index
    @teachers = @doctor.appointments.where(status: 'teacher')
    @tas = @doctor.appointments.where(status: 'ta')
    @patients = @doctor.appointments.where(status: 'patient')
    render json: { teachers: @teachers, tas: @tas, patients: @patients }
  end

  def show
    render json: @appointment
  end

  def enrolledUsers
    render json: @doctor.users 
  end

  def unenrolledUsers
    @users = User.all - @doctor.users 
    render json: @users
  end

  def create
    @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save 
      render json: @appointment
    else
      render json: { errors: @appointment.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: { errors: @appointment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment.destroy
    render json: { message: 'deleted? apt' }
  end

  private
  def appointment_params
    params.require(:appointment).permit(:status, :user_id)
  end

  def set_doctor
    @doctor = Doctor.find(params[:doctor_id])
  end

  def set_appointment
    @appointment = @doctor.appointments.find(params[:id])
  end
end
