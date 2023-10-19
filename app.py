from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_login import LoginManager, login_user, login_required, logout_user, UserMixin, current_user
from werkzeug.security import check_password_hash
from config import MONGO_URI, DB_NAME
from database import connect_to_mongodb, create_user, get_user_by_username, create_task, get_tasks_by_user

app = Flask(__name__)
app.secret_key = '123'

login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin):
    pass

@login_manager.user_loader
def load_user(user_id):
    user = User()
    user.id = user_id
    return user

connect_to_mongodb(MONGO_URI, DB_NAME)

# Registration and login routes
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'signupbtn' in request.form:
            username = request.form['username']
            password = request.form['password']
            email = request.form['email']
            create_user(username, password, email)
            flash('Registration successful. Please log in.', 'success')
            return redirect(url_for('index'))
        elif 'loginbtn' in request.form:
            username = request.form['username']
            password = request.form['password']
            user = get_user_by_username(username)
            if user and check_password_hash(user.password, password):
                login_user(user)
                session['user_id'] = str(user.id)
                flash('Logged in successfully.', 'success')
                return redirect(url_for('userpage'))

    return render_template('index.html')

# User page for task management
@app.route('/user')
@login_required
def userpage():
    tasks = get_tasks_by_user(current_user)
    return render_template('user_page.html', tasks=tasks)

if __name__ == '__main__':
    app.run(debug=True)










app.secret_key = '123'
username = 'Elizabeth'

# @app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'signupbtn' in request.form:
            username = request.form['username']
            password = request.form['password']
            email = request.form['email']

            # Create a new user in the database
            database.add_user_details(username, password, email)

            flash("Sign up Successful!", "signup")
            flash("You can proceed to Login.", "signup")
            return redirect(url_for('index'))

        elif 'loginbtn' in request.form:
            session['username'] = request.form['username']
            session['password'] = request.form['password']
            username = request.form['username']
            password = request.form['password']

            # Validate credentials and perform login logic.
            if database.check_user_login(username, password):
                flash('Login Successful!', 'login')
                user_id=database.check_user_login(username, password)
                return redirect(url_for('userpage'))
            else:
                flash("Invalid Login Details!", "failure")
                return redirect(url_for('index'))

    return render_template('index.html', Task=Task)


# @app.route("/user", methods=['GET', 'POST'])
def userpage():
    if 'username' in session and 'password' in session:
        username = session['username']
        password = session['password']
        user_id = database.check_user_login(username, password)
        task = database.get_task(user_id)

        return render_template('User_page.html', username=username, task=task, mentor=mentor, user_id=user_id)
    else:
        return redirect(url_for('index'))


@app.route("/logout", methods=['POST'])
def logout():
    # Clear the user session
    session.clear()
    return redirect(url_for('index'))

