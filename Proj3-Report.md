<h1>Project 3 report</h1>

<h2>Hypothesis</h2>
<p>The tool "Smart Units Converter" helps people convert various measures of length, time, weight, currency, etc., from one units system to other. We hypothesize that the tool helps people to achieve this at a much faster rate compared to any other tool like Google, searching the web for the answers, other extensions available in Google chrome marketplace.</p>

<h2>Evaluation Process</h2>
<ol>
  <li>We followed the evaluation framework suggested by Team-9, with a few changes to collect more metrics</li>
  <li>Each subject of the evaluation is asked to install the Google chrome extension on their local machine by following the steps oulined in the repository</li>
  <li>We then used a google form quiz with a set of 23 questions (conversion based) crafted to avaluate various use cases where the tool's functionality</li>
  <li>Subjects were asked to provide answers to these questions using the extension</li>
  <li>During this process, we gather various metrics like the number of questions subject is able to answer, time taken to answer the questions</li>
  <li>As our next step, we asked the subject to attempt the quiz again, without the use of extension this time</li>
  <li>We collected the above mentioned metric during this, along with time taken to answer each question.</li>
  <li>These metrics are used to arrive at the following conclusions</li>
  <li>Finally, we also asked the subjects for their feedback about the tool's usability and experience</li>
</ol>

<h2>Materials</h2>
<ol>
  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSc0rNQ2yRAcff7Y0WUHMXNZqOkkaB196mnBI3Mrt-wzMITKYw/viewform">Sign Up Link Sheet</a></li>
  <li><a href="https://docs.google.com/spreadsheets/d/1eiEOabLgA10kPQjgngsA3AiaYW7Q4tCdVtpvooA2MW8/edit#gid=0">Evaluation Sheet</a></li>
</ol>
<h2>Observations</h2>
<p><b>The following observations are made based on comparing the total time taken to complete the quiz</b></p>
<ol>
  <li>Time taken to debug compilation errors in Ruby, Rust and Go<br><img src="https://github.com/ChaitanyaBandikatla/GameOfLife/blob/master/img/compilation_debug_time.PNG"><br>Candidates took more time to debug compilation erros in Ruby when compared to Rust and Go</li>
  <li>Time taken by candidates familiar in the language to debug compilation errors<br><img src="https://github.com/ChaitanyaBandikatla/GameOfLife/blob/master/img/compilation_familiar_time.PNG"></li>
  <li>Time taken by candidates unfamiliar in the language to debug compilation errors<img src="https://github.com/ChaitanyaBandikatla/GameOfLife/blob/master/img/compilation_unfamiliar_time.PNG"></li>
</ol>
<p>In our pre-debugging sessions census, we asked the level of familiarity of the 3 languages by each candidate. Based on the results, we found that there  is very minute difference to debug a complication error with prior knowledge of the language.</p>
<p><b>The following observations were made for Logical Errors:</b></p>
<ol>
<li>Time taken to debug logical errors in Ruby, Rust and Go<br><img src="https://github.com/ChaitanyaBandikatla/GameOfLife/blob/master/img/logical_debug_time.PNG"><br>Candiates took the most time to debug logical errors in Rust, followed by Go and then Ruby.</li>
  <li>Time taken by candidates familiar in the language to debug logical errors<br><img src="https://github.com/ChaitanyaBandikatla/GameOfLife/blob/master/img/logical_familiar_time.PNG"></li>
  <li>Time taken by candidates unfamiliar in the language to debug logical errors<br><img src="https://github.com/ChaitanyaBandikatla/GameOfLife/blob/master/img/logical_unfamiliar_time.PNG"></li>
  </ol>
<p>Based on the results, we found that only people who are unfamilair in Rust and Ruby took more time than people knew the language before. The reults for Go seems almost similar with people who know the language or not.</p>
<h2>Conclusion</h2>
<ol>
  <li>Candidates were most familiar with Ruby and least familiar with Rust.</li>
  <li>Candidates found it harder to debug in Rust when compared to Ruby or Go. They found this language to be very unfamiliar and hard to understand. </li>
  <li>Candidates found it easy to debug logical errors in Ruby. Some of them mentioned the syntax to be like Python, hence making the code easily understandable.</li>
  <li>4 out of 9 Candidates used print statements to debug code. 2 candidates referred online resources for debugging.</li>
  <li>Hence, familiarity with the language helped candidates to debug the code faster. The hypothesis we tested against is correct.</li>
</ol>
<h2>Threats to Validity</h2>
<table style="width:100%">
  <tr>
    <th>Threat</th>
    <th>Possible Solution</th>
  </tr>
  <tr>
    <td>We didn't have a benchmark to compare our results with.</td>
    <td>We should have timed and taken the debugging sessions ourselves to observe how we debug the bugs we created.</td>
  </tr>
  <tr>
    <td>We didn't have a standardised code testings as we introduced different kinds of bugs in different languages.</td>
    <td>We should have introduced the same bugs in all the languages and asked the candidates to debug in the language that they are the most familiar with.</td>
  </tr>
  <tr>
    <td>We didn't take a post survey after the debugging sessions.</td>
    <td>Metrics collected from the post survey could have helped us understand more about the candidates perspective while they debugged the code in different languages.</td>
  </tr>
</table>
