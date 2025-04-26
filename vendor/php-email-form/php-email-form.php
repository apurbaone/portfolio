<form method="post" action="contact.php" name="contactform" id="contactform">
 
            <fieldset>
 
            <legend>Enter your details below to get in touch:</legend>
 
            <label for="name"><span class="required">*</span> Your Name</label>
            <input name="name" type="text" id="name" size="30" value="" />
 
            <br />
            <label for="email"><span class="required">*</span> Email</label>
            <input name="email" type="text" id="email" size="30" value="" />
 
            <br />
            <label for="phone"><span class="required">*</span> Phone</label>
            <input name="phone" type="text" id="phone" size="30" value="" />
 
            <br />
            <label for="subject">Subject</label>
            <select name="subject" id="subject" style="width: 302px;">
              <option value="Feedback">Feedback</option>
              <option value="Question">Question</option>
              <option value="Contribute">Contribute</option>
            </select>
 
            <br />
            <label for="comments"><span class="required">*</span> Your comments</label>
            <textarea name="comments" cols="40" rows="3" id="comments"></textarea>
 
            <p><span class="required">*</span> Are you human?</p>
 
            <label for="verify">   3 + 7 =</label>
            <input name="verify" type="text" id="verify" size="4" value="" style="width: 30px;" /><br /><br />
 
            <input type="submit" class="submit" id="submit" value="Submit" />
 
            </fieldset>
 
            </form>