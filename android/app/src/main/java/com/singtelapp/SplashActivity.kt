package com.singtelapp;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

class SplashActivity : AppCompatActivity() {

        override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)

        startActivity(Intent(this, MainActivity::class.java))
        finish()
        }
}