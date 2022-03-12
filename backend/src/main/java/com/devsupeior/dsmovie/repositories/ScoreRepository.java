package com.devsupeior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsupeior.dsmovie.entities.Score;
import com.devsupeior.dsmovie.entities.ScorePk;

public interface ScoreRepository extends JpaRepository<Score, ScorePk> {
	
}
