"use client"

import { useState } from 'react'
import styles from './ContactForm.module.css'

type FormData = {
  name: string
  phone: string
  email: string
  location: string
  propertyType: string
  renovationType: string
  timeline: string
  budget: string
}

export default function ContactForm({ dict }: { dict: any }) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    propertyType: '',
    renovationType: '',
    timeline: '',
    budget: '',
  })

  const formDict = dict.contact.form

  const updateForm = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep(s => Math.min(s + 1, 4))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here we would normally send data to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.formContainer}>
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✓</div>
          <h2>{formDict.buttons.success}</h2>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.stepIndicator}>
        {[1, 2, 3, 4].map(num => (
          <div 
            key={num} 
            className={`${styles.stepDot} ${step === num ? styles.active : ''} ${step > num ? styles.completed : ''}`}
          >
            {step > num ? '✓' : num}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>{formDict.step1.title}</h2>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>{formDict.step1.name}</label>
              <input 
                type="text" 
                required 
                className={styles.input}
                value={formData.name}
                onChange={e => updateForm('name', e.target.value)}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>{formDict.step1.phone}</label>
              <input 
                type="tel" 
                required 
                className={styles.input}
                value={formData.phone}
                onChange={e => updateForm('phone', e.target.value)}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>{formDict.step1.email}</label>
              <input 
                type="email" 
                className={styles.input}
                value={formData.email}
                onChange={e => updateForm('email', e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>{formDict.step2.title}</h2>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>{formDict.step2.location}</label>
              <input 
                type="text" 
                required 
                className={styles.input}
                value={formData.location}
                onChange={e => updateForm('location', e.target.value)}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>{formDict.step2.type}</label>
              <div className={styles.radioGroup}>
                {Object.entries(formDict.step2.types).map(([key, label]) => (
                  <label key={key} className={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="propertyType" 
                      value={key}
                      checked={formData.propertyType === key}
                      onChange={e => updateForm('propertyType', e.target.value)}
                      className={styles.radioInput}
                      required
                    />
                    <div className={styles.radioCustom}></div>
                    <span className={styles.radioText}>{label as string}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>{formDict.step3.title}</h2>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>{formDict.step3.type}</label>
              <div className={styles.radioGroup}>
                {Object.entries(formDict.step3.types).map(([key, label]) => (
                  <label key={key} className={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="renovationType" 
                      value={key}
                      checked={formData.renovationType === key}
                      onChange={e => updateForm('renovationType', e.target.value)}
                      className={styles.radioInput}
                      required
                    />
                    <div className={styles.radioCustom}></div>
                    <span className={styles.radioText}>{label as string}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>{formDict.step3.timeline}</label>
              <div className={styles.radioGroup}>
                {Object.entries(formDict.step3.timelines).map(([key, label]) => (
                  <label key={key} className={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="timeline" 
                      value={key}
                      checked={formData.timeline === key}
                      onChange={e => updateForm('timeline', e.target.value)}
                      className={styles.radioInput}
                      required
                    />
                    <div className={styles.radioCustom}></div>
                    <span className={styles.radioText}>{label as string}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>{formDict.step4.title}</h2>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>{formDict.step4.budget}</label>
              <div className={styles.radioGroup}>
                {Object.entries(formDict.step4.budgets).map(([key, label]) => (
                  <label key={key} className={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="budget" 
                      value={key}
                      checked={formData.budget === key}
                      onChange={e => updateForm('budget', e.target.value)}
                      className={styles.radioInput}
                    />
                    <div className={styles.radioCustom}></div>
                    <span className={styles.radioText}>{label as string}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          {step > 1 && (
            <button type="button" onClick={prevStep} className={`${styles.btn} ${styles.btnPrev}`}>
              {formDict.buttons.prev}
            </button>
          )}
          {step < 4 ? (
            <button type="button" onClick={nextStep} className={`${styles.btn} ${styles.btnNext}`}>
              {formDict.buttons.next}
            </button>
          ) : (
            <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>
              {formDict.buttons.submit}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
