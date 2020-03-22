class GoalsController < ApplicationController
    def create
        # 新規のgoalはデフォルトでacrive_flagがtrueに設定される
        user = User.find(session[:user_id])
        goal = user.goals.build(goal_params)

        if goal.save
          render json: goal, status: :created
        else
          render json: { errors: goal.errors.full_messages }, status: :internal_server_error
        end
    end

    def destroy
        user = User.find(session[:user_id])
        goal = user.goals.find_by(active_flag: true)

        # goalは論理削除
        if goal.update(active_flag: false)
            render json: goal, status: :ok
        else
            render json: { errors: goal.errors.full_messages }, status: :internal_server_error
        end
    end

    def goal_params
        params.require(:goals).permit(:user_id, :goal, :week, :active_flag)
    end
end
