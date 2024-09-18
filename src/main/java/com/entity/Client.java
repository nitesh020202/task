package com.entity;


import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "clients")
public class Client {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "client_id", nullable = false, unique = true)
    private String clientId;

    @Column(name = "client_name")
    private String clientName;

    @Column(name = "contact_info")
    private String contactInfo;

    @Column(name = "received_date")
    private Date receivedDate;

    @Column(name = "inventory_received")
    private String inventoryReceived;

    @Column(name = "report_issue")
    private String reportIssue;

    @Column(name = "client_notes")
    private String clientNotes;

    @Column(name = "assigned_technician")
    private String assignedTechnician;

    @Column(name = "estimated_amount")
    private Double estimatedAmount;

    @Column(name = "deadline")
    private Date deadline;

    @Column(name = "status")
    private String status;
    
    // Getters and Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}

	public Date getReceivedDate() {
		return receivedDate;
	}

	public void setReceivedDate(Date receivedDate) {
		this.receivedDate = receivedDate;
	}

	public String getInventoryReceived() {
		return inventoryReceived;
	}

	public void setInventoryReceived(String inventoryReceived) {
		this.inventoryReceived = inventoryReceived;
	}

	public String getReportIssue() {
		return reportIssue;
	}

	public void setReportIssue(String reportIssue) {
		this.reportIssue = reportIssue;
	}

	public String getClientNotes() {
		return clientNotes;
	}

	public void setClientNotes(String clientNotes) {
		this.clientNotes = clientNotes;
	}

	public String getAssignedTechnician() {
		return assignedTechnician;
	}

	public void setAssignedTechnician(String assignedTechnician) {
		this.assignedTechnician = assignedTechnician;
	}

	public Double getEstimatedAmount() {
		return estimatedAmount;
	}

	public void setEstimatedAmount(Double estimatedAmount) {
		this.estimatedAmount = estimatedAmount;
	}

	public Date getDeadline() {
		return deadline;
	}

	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Client(Long id, String clientId, String clientName, String contactInfo, Date receivedDate,
			String inventoryReceived, String reportIssue, String clientNotes, String assignedTechnician,
			Double estimatedAmount, Date deadline, String status) {
		super();
		this.id = id;
		this.clientId = clientId;
		this.clientName = clientName;
		this.contactInfo = contactInfo;
		this.receivedDate = receivedDate;
		this.inventoryReceived = inventoryReceived;
		this.reportIssue = reportIssue;
		this.clientNotes = clientNotes;
		this.assignedTechnician = assignedTechnician;
		this.estimatedAmount = estimatedAmount;
		this.deadline = deadline;
		this.status = status;
	}

	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}

	

    
    
}
