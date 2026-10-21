package com.ngmango7.cartendayapp

import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.CheckBox
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.setPadding

class MainActivity : AppCompatActivity() {

    private val tasks = listOf(
        "Check tire pressure and tread condition",
        "Inspect engine oil and coolant levels",
        "Test headlights, brake lights, and turn signals",
        "Replace or clean windshield wipers",
        "Check battery terminals and charge health",
        "Review brake fluid and washer fluid",
        "Vacuum cabin and inspect floor mats",
        "Verify emergency kit and first-aid supplies",
        "Look for leaks under the vehicle",
        "Set a route plan and final safety check"
    )

    private lateinit var titleText: TextView
    private lateinit var summaryText: TextView
    private lateinit var taskContainer: LinearLayout
    private lateinit var resetButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        titleText = findViewById(R.id.vehicleTitle)
        summaryText = findViewById(R.id.vehicleSummary)
        taskContainer = findViewById(R.id.taskContainer)
        resetButton = findViewById(R.id.resetButton)

        titleText.text = "Toyota Corolla"
        summaryText.text = "Mileage: 12,500 • Service due: 2026-10-30 • 10-day readiness review."

        tasks.forEachIndexed { index, taskText ->
            val row = CheckBox(this).apply {
                text = taskText
                id = View.generateViewId()
                setPadding(16)
                textSize = 16f
                isChecked = false
                setOnCheckedChangeListener { _, isChecked ->
                    if (isChecked) {
                        alpha = 0.7f
                    } else {
                        alpha = 1f
                    }
                }
            }
            taskContainer.addView(row)
        }

        resetButton.setOnClickListener {
            for (i in 0 until taskContainer.childCount) {
                val checkBox = taskContainer.getChildAt(i) as CheckBox
                checkBox.isChecked = false
                checkBox.alpha = 1f
            }
        }
    }
}
