import React from 'react'
import './experience.css'
import { PiDotOutlineBold } from 'react-icons/pi'

/* Every article tag -> one experience */

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Internships</h5>
      <h2>Experience</h2>

      <div className='experience__container'>
        <article className='experience'>
          <div className='experience__head'>
            <h3>Software Engineer Intern</h3>
            <h3>📍J.P.Morgan</h3>
            <h3>June 2023-Present</h3>
          </div>

          <ul className='experience_responsibilities'>
            <li>
              <p>
                Worked in the Global Technology Infrastructure and Tech
                Production Delivery Team.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p className='experience__title'>
                Automated app monitoring pipeline using Terraform and Jenkins.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>
                Integrated an end-to-end pipeline to automate the setup of
                infrastructure resources required for application monitoring and
                performance management to Dynatrace using Terraform for
                infrastructure as code and Jenkins for CI/CD.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>
                Ensured that the pipeline was well-documented and could be
                easily maintained and updated as needed for the deployment to
                the Production Environment by explaining the logic behind in
                weekly walkthrough meeting to the team.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p className='experience__title'>
                Synthetic Monitoring using Grafana.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>
                Used Grafana's synthetic monitoring to optimize user experience
                by tracking performance metrics and setting up alerts for
                potential issues across multiple services within an in-house
                application.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p className='experience__title'>
                Collaboration with Senior Engineers.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>
                Worked alongside senior engineers in the Global Hackathon as
                part of the Innovation Week and secured second place.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p className='experience__title'>
                Collaboration with Fellow Interns.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>
                Collaborated with five interns to build a full-stack chatbot
                using NLP. The chatbot was designed to provide guidance on
                fostering a diverse work environment for JP Morgan's Diversity,
                Equity, and Inclusion team. Was Responsible for the backend
                using Nodejs with Typescript.
              </p>
            </li>
          </ul>
        </article>

        {/* BREAK OF EXPERIENCE 1 */}

        <article className='experience'>
          <div className='experience__head'>
            <h3>NLP Engineer</h3>
            <h3>📍Super Chain Technology</h3>
            <h3>June 2022-September 2022</h3>
          </div>

          <ul className='experience_responsibilities'>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <a
                href='https://www.producthunt.com/products/super-cat-human-like-automl'
                className='experience__link'
              >
                Automated Machine Learning
              </a>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>
                Developed AutoML's Classification part, which finds the most
                accurate ML models for input data based on user-defined criteria
                and classifies the target data. Used by the companies for
                customers' churn prediction.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>
                Boosted T5-based Table QA accuracy from 60% to 88% by filtering
                columns through semantic search and checking their relevancy.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <a
                href='https://github.com/ayazhankadessova/Portfolio-Projects/tree/main/Fine_Tune_Sentiment_Analysis'
                className='experience__link'
              >
                Automated Machine Learning
              </a>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>
                Involved in designing and integrating the Data Analysis and AI
                modules for local online stores. Increased Bert-base text
                classification model accuracy for sentiment analysis from 46% to
                52% by fine-tuning model with 24000 review data in Chinese.
              </p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />

              <p>
                Upgraded text classification model from binary
                (positive/negative) to multi-label (1-5). Integrated a new model
                in the company Performance Analysis pipeline for optimal
                customer feedback insight and customer service software for
                prioritizing queries.
              </p>
            </li>
          </ul>
        </article>

        {/* BREAK OF EXPERIENCE 2 */}

        <article className='experience'>
          <div className='experience__head'>
            <h3>IT Investment Intern</h3>
            <h3>📍Alphalex Capital Management</h3>
            <h3>March 2022 - May 2022</h3>
          </div>

          <ul className='experience_responsibilities'>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
            <li>
              <PiDotOutlineBold className='experience__list-icon' />
              <p>Working with Applications on Public & Private CLoud.</p>
            </li>
          </ul>
        </article>

        {/* BREAK OF EXPERIENCE 3 */}
      </div>
    </section>
  )
}

export default Experience
