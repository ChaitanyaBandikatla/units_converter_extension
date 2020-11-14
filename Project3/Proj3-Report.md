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
  <br><img src="https://github.com/ChaitanyaBandikatla/units_converter_extension/blob/master/Project3/Total%20time%20taken.png"><br>
  From the above graph, we can see that all the subjects took less time to complete the quiz using the extension when compared to using other tools like Google, web search, other extensions from marketplace.
</ol>
<p>However, as we see in few scenarios, the difference in time taken is considerably less, and the following analysis helps gather more evidence for the hypothesis</p>
<p><b>The following observations are made based on comparison of time taken to answer specific questions</b></p>
<ol>
<li>Time taken to answer Question 12<br><img src="https://github.com/ChaitanyaBandikatla/units_converter_extension/blob/master/Project3/Time%20taken%20to%20answer%20Q12.png"><br></li>
  <li>Time taken to answer Question 7<br><img src="https://github.com/ChaitanyaBandikatla/units_converter_extension/blob/master/Project3/Time%20taken%20to%20answer%20Q7.png"></li>
  </ol>
<p>The above graphs show that most of the subjects took considerably higher time to answer Question 12 and Question 7 using other tools when compared to using extension. These questions are centered around the conversion of length (miles to metres), and temperature. Hence, we can say that the extension provides a considerable advantage over other tools in these specific conversion areas.</p>
<ol>
<li>Time taken to answer Question 9<br><img src="https://github.com/ChaitanyaBandikatla/units_converter_extension/blob/master/Project3/Time%20taken%20to%20answer%20Q9.png"><br></li>
  </ol>
<p>The above graph shows that most of the subjects almost same time to answer Question 9 using other tools when comapared to using extension. This question is centred arounf the conversion of length (yards to km). This observation given us an interesting point that the tool is not very efficient in all the scenarios, and one such scenario is Question 9.</p>
<li>When we observe the time taken by all the subjects to answer Question 1 by using other tools, it is considerably higher than time taken to answer other questions. This is primarily because it involves the time taken by the subject to get started on using the other tools. This helps us drive an important usecase for the extension which is that the extension does not involve setting up or the time taken to get started to use on the fly, rather it provides the users with results by merely selecting the text they want to convert.</li>

<h2>Conclusion</h2>
Based on the above observations we can drive to the following conclusion
<ol>
  <li>The tool helps users to convert the values they wish in considerably less time when compared to other tools like Google, web search, etc.</li>
  <li>The tool helps users considerably higher in converting specific set of values (or metrics), in terms of time. </li>
  <li>The tool helps even though does not provide considerable advantage in all scenarios, it does provide almost the same performance if not better when compared to other tools, in terms of time.</li>
  <li>The tool has an advantage of no initial getting started time every time the user wishes to perform a conversion. It acts on the fly which also avoids the conext switching for users.</li>
  <li>Based on the verbal feedback collected from the subjects, we can say that the tool even though is not perfect, it is helpful. One major pain point reported is that it does not allowing copying the converted values to clipboard, which can prove to be a major advantage to the users.</li>
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
