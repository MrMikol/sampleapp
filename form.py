from flask_wtf import FlaskForm


class Anime(FlaskForm):
    image = TextAreaField('image', validators=[InputRequired()])
    character = TextAreaField('character', validators=[InputRequired()])
    user = TextAreaField('user', validators=[InputRequired()])
    submit = SubmitField('Sign Up', render_kw={'class': 'btn waves-effect waves-light white-text'})