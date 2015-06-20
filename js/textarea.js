function cursor_start(textarea){
	if (area.createTextRange)
		{var r=area.createTextRange();
		 r.collapse(true);
		 r.select();
		}
}