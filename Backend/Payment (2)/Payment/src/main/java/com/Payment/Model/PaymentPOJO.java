package com.Payment.Model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "payments")
public class PaymentPOJO {
    
	@Id
	private String txId;
	public String name;
	public long cardnumber;
	public Date exp;
	public int cVV;
    private int rId;
	private double amount;
    private String paymentStatus;
    
    
    
    public PaymentPOJO() {
		super();
		// TODO Auto-generated constructor stub
	}



	public PaymentPOJO(String txId, String name, long cardnumber, Date exp, int cVV, int rId, double amount,
			String paymentStatus) {
		super();
		this.txId = txId;
		this.name = name;
		this.cardnumber = cardnumber;
		this.exp = exp;
		this.cVV = cVV;
		this.rId = rId;
		this.amount = amount;
		this.paymentStatus = paymentStatus;
	}



	public String getTxId() {
		return txId;
	}



	public void setTxId(String txId) {
		this.txId = txId;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public long getCardnumber() {
		return cardnumber;
	}



	public void setCardnumber(long cardnumber) {
		this.cardnumber = cardnumber;
	}



	public Date getExp() {
		return exp;
	}



	public void setExp(Date exp) {
		this.exp = exp;
	}



	public int getcVV() {
		return cVV;
	}



	public void setcVV(int cVV) {
		this.cVV = cVV;
	}



	public int getrId() {
		return rId;
	}



	public void setrId(int rId) {
		this.rId = rId;
	}



	public double getAmount() {
		return amount;
	}



	public void setAmount(double amount) {
		this.amount = amount;
	}



	public String getPaymentStatus() {
		return paymentStatus;
	}



	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}



	@Override
	public String toString() {
		return "PaymentPOJO [txId=" + txId + ", name=" + name + ", cardnumber=" + cardnumber + ", exp=" + exp + ", cVV="
				+ cVV + ", rId=" + rId + ", amount=" + amount + ", paymentStatus=" + paymentStatus + "]";
	}
    
	}