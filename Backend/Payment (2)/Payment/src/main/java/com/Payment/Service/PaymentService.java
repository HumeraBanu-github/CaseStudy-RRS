package com.Payment.Service;

import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Payment.Model.PaymentPOJO;
import com.Payment.Model.Reservation;
import com.Payment.Repository.PaymentRepository;



@Service
public class PaymentService {
	Reservation order = new Reservation();
	@Autowired
	private PaymentRepository paymentRepository;
	
	public PaymentPOJO doPay(PaymentPOJO payment,Reservation order) {
		payment.setPaymentStatus(paymentStatus());
		payment.setAmount(order.getTotalTicketFair());
		payment.setTxId(UUID.randomUUID().toString());
		return paymentRepository.save(payment);
		
	}

	private String paymentStatus() {
		// TODO Auto-generated method stub
		return new Random().nextBoolean()?"success":"failure";
	}
	
}
